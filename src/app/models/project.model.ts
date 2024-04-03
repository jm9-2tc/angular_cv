export interface Project {
    name: string,
    imagePath: string,
    description: string,
    involvedTechnologies: string[],
    links: { github?: string, ado?: string }
}