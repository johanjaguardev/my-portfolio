interface IProject {
  client: string;
  url: string;
  stack: string[];
  thumbnail: string[];
  videoUrl?: string;
  caseOfUse?: {
    charge?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
  achievement?: { number: number; description: string }[] | null;
  observations?: string;
}

type ProjectProps = {
  project: IProject;
};
export type { ProjectProps, IProject };
