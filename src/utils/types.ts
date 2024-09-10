interface Idea{
    title: string,
    sub_title:string,
    description: string
}

interface ProjectDetail {
    projectData:{
        icon: string,
        title: string,
        description: string,
        author: string,
        time: string,
        tags: string[]
    }
}