import {ref, computed} from 'vue'

export default function useSortedPosts(sortedPosts) {
    const searchQuery = ref('')
    console.log(sortedPosts, searchQuery)
    const sortedAndSearchedPosts = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))

    })

    return {
        sortedPosts, sortedAndSearchedPosts
    }
}