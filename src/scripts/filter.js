export function filterProjects(allProjects, selectedTags) {
    return allProjects.filter((project) => {
        // If 'All' is selected or the project has at least one selected tag, include the project
        return selectedTags.includes('All Work') || project.frontmatter.tags.some(tag => selectedTags.includes(tag));
    });
}
