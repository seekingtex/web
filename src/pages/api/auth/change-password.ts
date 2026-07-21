import type { APIRoute } from 'astro';
import { verifyCredentials, verifySessionToken, hashPassword } from '~/lib/auth';

export const prerender = false;

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    const sessionCookie = cookies.get('ks-admin-session')?.value;
    if (!sessionCookie) {
      return new Response(JSON.stringify({ success: false, error: 'Not logged in' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const session = verifySessionToken(sessionCookie);
    if (!session) {
      return new Response(JSON.stringify({ success: false, error: 'Session expired' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { oldPassword, newPassword } = body;

    if (!oldPassword || !newPassword) {
      return new Response(JSON.stringify({ success: false, error: 'Please enter both old and new passwords' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (newPassword.length < 6) {
      return new Response(JSON.stringify({ success: false, error: 'New password must be at least 6 characters' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!verifyCredentials(session.username, oldPassword)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid credentials' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const repo = 'Seekingtex/web';
    const branch = 'main';
    const filePath = 'src/data/admin-auth.json';
    const githubToken = (import.meta.env as any).GITHUB_TOKEN;

    if (!githubToken) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'GITHUB_TOKEN is not configured in Cloudflare Pages environment variables',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const newHash = hashPassword(newPassword);

    const getRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}?ref=${branch}`, {
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Seekingtex-auth',
      },
    });

    if (!getRes.ok) {
      return new Response(JSON.stringify({ success: false, error: '閺冪姵纭剁拠璇插絿闁板秶鐤嗛弬鍥︽' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const fileData = await getRes.json();
    const currentContent = JSON.parse(Buffer.from(fileData.content, 'base64').toString('utf-8'));
    currentContent.password = newPassword;
    currentContent.passwordHash = newHash;

    const updatedContent = Buffer.from(JSON.stringify(currentContent, null, 2)).toString('base64');

    const commitRes = await fetch(`https://api.github.com/repos/${repo}/contents/${filePath}`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${githubToken}`,
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Seekingtex-auth',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'chore: update admin password',
        content: updatedContent,
        sha: fileData.sha,
        branch,
      }),
    });

    if (!commitRes.ok) {
      return new Response(JSON.stringify({ success: false, error: 'Git commit failed' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Password changed successfully',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Password change failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
