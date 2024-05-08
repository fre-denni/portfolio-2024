document.addEventListener('astro:page-load', () => {
    let tags = document.querySelectorAll('#filter');
    let showAll = document.querySelector('.tag-bar button:first-child');
    let tagArray = ['All Work'];

    let projectCards = document.querySelectorAll('.card');

    tags.forEach(tag => {tag.addEventListener('click', toggleCard);});

    function toggleCard(event) {
        let button = event.target;
        let tagName = button.innerText;

        if(button.classList.contains('tag-selected')) {
            button.classList.remove('tag-selected');
            button.classList.add('tag-unselected');
            let index = tagArray.indexOf(tagName);
            if (index > -1) {
                tagArray.splice(index, 1);
            }
        } else {
            button.classList.remove('tag-unselected');
            button.classList.add('tag-selected');
            if(tagName !== 'All Work') { 
                tagArray.push(tagName);
            }
        }

        if(tagName==='All Work' || tagArray.length === 0) {
            tagArray = ['All Work'];
            tags.forEach(button =>{
                button.classList.remove('tag-selected');
                button.classList.add('tag-unselected');
            });
            showAll.classList.remove('tag-unselected');
            showAll.classList.add('tag-selected');
        } else if(tagArray.includes('All Work')) {
            let index = tagArray.indexOf('All Work');
            if(index > -1) {
                tagArray.splice(index,1);
            }
            showAll.classList.remove('tag-selected');
            showAll.classList.add('tag-unselected');
        }

        let otherTags = Array.from(tags).slice(1);
        if(otherTags.every(button => button.classList.contains('tag-selected'))) {
            tagArray = ['All Work'];
            otherTags.forEach(button => {
                button.classList.remove('tag-selected');
                button.classList.add('tag-unselected');
            });
            showAll.classList.remove('tag-unselected');
            showAll.classList.add('tag-selected');
        }

        filterProjects();
    }
    
    function filterProjects(){
        if(tagArray.includes('All Work')) {
            projectCards.forEach(card => {
                card.style.display = '';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 50); // Small delay to allow the display property to take effect
            });
        } else {
            projectCards.forEach(card => {
                let cardTags = card.className.split(' ');
                let cardTagsStr = cardTags.join(' ');
                if (tagArray.some(tag => cardTagsStr.includes(tag))) {
                    card.style.display = '';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50); // Small delay to allow the display property to take effect
                } else {
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300); // Match this with the duration specified in your CSS transition
                }
            });
        }
    }
    

    filterProjects();
})