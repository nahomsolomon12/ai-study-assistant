import { getUser } from "@/actions";
import { getIntroQuote } from "@/actions/get-intro-quote";
import { getProject } from "@/actions/get-project";
import { MainContent } from "@/app/main-content";
import { redirect } from "next/navigation";

interface PageProps {
  params: Promise<{ projectId: string }>;
}

export default async function ProjectPage({ params }: PageProps) {
  const { projectId } = await params;
  const [user, introQuote] = await Promise.all([getUser(), getIntroQuote()]);

  if (!user) {
    redirect("/");
  }

  let project;
  try {
    project = await getProject(projectId);
  } catch (error) {
    redirect("/");
  }

  return <MainContent user={user} project={project} introQuote={introQuote} />;
}
