interface GithubContributionsProps {
  githubUsername: string;
}

async function fetchGithubContributions({
  githubUsername,
}: GithubContributionsProps) {
  const res = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${githubUsername}?y=last`
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Render() {
  const githubContributions = await fetchGithubContributions({
    githubUsername: "killian-dv",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Le graph</p>

      <pre>{JSON.stringify(githubContributions, null, 2)}</pre>
    </main>
  );
}
