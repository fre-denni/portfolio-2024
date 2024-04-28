document.addEventListener('astro:page-load', () => {
    let buttons = document.querySelectorAll('.tag-bar button');
    let allButton = document.querySelector('.tag-bar button:first-child');

    buttons.forEach(button => { button.addEventListener('click', toggleTag);});

    let selectedTags = ['All']; // starts with 'All' selected

    function toggleTag(event) {
        let button = event.target;
        let tagName = button.innerText;

        if(button.classList.contains('tag-selected')) { 
            button.classList.remove('tag-selected');
            button.classList.add('tag-unselected');
            let index = selectedTags.indexOf(tagName);
            if(index > -1) {
                selectedTags.splice(index, 1);
            }
        } else {
            button.classList.remove('tag-unselected');
            button.classList.add('tag-selected');
            if(tagName !== 'All') {
                selectedTags.push(tagName);
            }
        }

        // If 'All' is selected or no other tags are selected, select 'All' and deselect others
        if(tagName === 'All' || selectedTags.length === 0) {
            selectedTags = ['All'];
            buttons.forEach(button => {
                button.classList.remove('tag-selected');
                button.classList.add('tag-unselected');
            });
            allButton.classList.remove('tag-unselected');
            allButton.classList.add('tag-selected');
        } else if(selectedTags.includes('All')) {
            // If 'All' is selected and another tag is clicked, deselect 'All'
            let index = selectedTags.indexOf('All');
            if(index > -1) {
                selectedTags.splice(index, 1);
            }
            allButton.classList.remove('tag-selected');
            allButton.classList.add('tag-unselected');
        }

        // If all other tags are selected, deselect them and select 'All'
        let nonAllButtons = Array.from(buttons).slice(1); // exclude "All" button
        if(nonAllButtons.every(button => button.classList.contains('tag-selected'))) {
            selectedTags = ['All'];
            nonAllButtons.forEach(button => {
                button.classList.remove('tag-selected');
                button.classList.add('tag-unselected');
            });
            allButton.classList.remove('tag-unselected');
            allButton.classList.add('tag-selected');
        }
    }
});
