export type Project = {
  projectId: number
  title: string
  tagline: string
  type: string
  isHosted: boolean
  imgLink: string
  siteLink: string | undefined
  repository: string
  techStack: string[]
  description: string
}
