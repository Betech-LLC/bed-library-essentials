<template>
    <JPageProjectCategory
        :projects_data="projects_data"
        :projects="projects"
        :categories="categories"
        :category="category"
        :currentPath="currentPath"
    />
</template>

<script>
export default {
    data() {
        return {
            projects_data: [],

            projects: {
                current_page: 1,
                data: [
                    {
                        title: 'Praesentium quod velit.',
                        slug: 'praesentium-quod-velit',
                        description:
                            'Eveniet laboriosam eligendi aut cum harum voluptate. Nobis iste dolorem ut corrupti. Aut quis culpa delectus velit laudantium ullam sint.',
                        type: 'Ipsam ut eveniet a.',
                        progress: null,
                        used: 'Deserunt aut quia omnis.',
                        location: 'Sed ut aut.',
                        construction_progress: 'incomplete',
                        image: { url: null, alt: 'Praesentium quod velit.' },
                    },
                    {
                        title: 'Quia ad odit.',
                        slug: 'quia-ad-odit',
                        description:
                            'Repudiandae velit est quia sint aperiam vero. Quaerat commodi eos et impedit voluptatum. Dicta accusamus iste repellendus. Quibusdam distinctio asperiores ad.',
                        type: 'Voluptas sequi.',
                        progress: null,
                        used: 'Culpa amet aliquam et ut.',
                        location: 'Sed molestiae qui.',
                        construction_progress: 'complete',
                        image: { url: null, alt: 'Quia ad odit.' },
                    },
                    {
                        title: 'Et laudantium dolorem.',
                        slug: 'et-laudantium-dolorem',
                        description:
                            'Non rerum ab esse. Ut dolore doloribus quas veniam eum modi. Qui aperiam cum et eos temporibus voluptas. Dolorum rerum et ut suscipit sapiente et.',
                        type: 'Et quas.',
                        progress: null,
                        used: 'Debitis.',
                        location: 'Totam et eum in.',
                        construction_progress: 'incomplete',
                        image: { url: null, alt: 'Et laudantium dolorem.' },
                    },
                    {
                        title: 'Asperiores.',
                        slug: 'asperiores',
                        description:
                            'Doloribus doloremque et non aliquam. Doloremque sed doloribus vero tempora distinctio numquam magnam. Libero excepturi rerum laborum facilis. Rerum amet optio aut distinctio.',
                        type: 'Qui vel quia est quis.',
                        progress: null,
                        used: 'Molestias voluptatem.',
                        location: 'Ullam voluptatem.',
                        construction_progress: 'incomplete',
                        image: { url: null, alt: 'Asperiores.' },
                    },
                    {
                        title: 'Veniam.',
                        slug: 'veniam',
                        description:
                            'Harum porro quae qui numquam eligendi. Excepturi molestiae sit fuga eveniet itaque qui rem. Eos qui architecto officiis quos ullam et.',
                        type: 'Facere aut eum soluta.',
                        progress: null,
                        used: 'Ducimus ut vel cum.',
                        location: 'Itaque.',
                        construction_progress: 'complete',
                        image: { url: null, alt: 'Veniam.' },
                    },
                    {
                        title: 'Iste ratione quia fugiat.',
                        slug: 'iste-ratione-quia-fugiat',
                        description:
                            'Eum totam dignissimos et doloremque. Voluptatem neque ea ut in soluta aut qui. Totam est necessitatibus corrupti laboriosam nulla repudiandae.',
                        type: 'Suscipit.',
                        progress: null,
                        used: 'Ducimus.',
                        location: 'Fugiat et.',
                        construction_progress: 'incomplete',
                        image: { url: null, alt: 'Iste ratione quia fugiat.' },
                    },
                    {
                        title: 'Totam vitae aut.',
                        slug: 'totam-vitae-aut',
                        description:
                            'Hic nisi dolorem ipsa recusandae dolor qui. Rerum ratione nostrum est. Adipisci ea aliquam delectus unde soluta modi.',
                        type: 'Voluptates et eos.',
                        progress: null,
                        used: 'Porro est aut modi.',
                        location: 'Eveniet nisi sit.',
                        construction_progress: 'complete',
                        image: { url: null, alt: 'Totam vitae aut.' },
                    },
                    {
                        title: 'Et.',
                        slug: 'et',
                        description:
                            'Autem et voluptatem facere pariatur sed tempora sed. Aut sit qui quisquam minima voluptatum. Quisquam delectus velit facere placeat. Nobis id fugit fuga qui.',
                        type: 'Tempora similique rem.',
                        progress: null,
                        used: 'Blanditiis minus.',
                        location: 'Necessitatibus.',
                        construction_progress: 'incomplete',
                        image: { url: null, alt: 'Et.' },
                    },
                    {
                        title: 'Aspernatur vel qui.',
                        slug: 'aspernatur-vel-qui',
                        description:
                            'Debitis natus quo voluptas ut consequatur ut sint porro. A sit quia eum molestias qui. Esse qui qui quisquam porro quo.',
                        type: 'Nulla adipisci est quia in.',
                        progress: null,
                        used: 'Laboriosam.',
                        location: 'Nihil.',
                        construction_progress: 'complete',
                        image: { url: null, alt: 'Aspernatur vel qui.' },
                    },
                    {
                        title: 'Inventore.',
                        slug: 'inventore',
                        description:
                            'Et exercitationem sit tempore nemo voluptatum odit. Dolores quae voluptas eum vitae adipisci impedit aliquam minus. Rem qui eaque fuga exercitationem enim.',
                        type: 'Repellat magni.',
                        progress: null,
                        used: 'Quos non soluta ut.',
                        location: 'Deserunt sit dolorum quam.',
                        construction_progress: 'complete',
                        image: { url: null, alt: 'Inventore.' },
                    },
                ],
                first_page_url: 'http://localhost:8000/du-an?page=1',
                from: 1,
                last_page: 5,
                last_page_url: 'http://localhost:8000/du-an?page=5',
                links: [
                    { url: null, label: '<', active: false },
                    { url: 'http://localhost:8000/du-an?page=1', label: '1', active: true },
                    { url: 'http://localhost:8000/du-an?page=2', label: '2', active: false },
                    { url: 'http://localhost:8000/du-an?page=3', label: '3', active: false },
                    { url: 'http://localhost:8000/du-an?page=4', label: '4', active: false },
                    { url: 'http://localhost:8000/du-an?page=5', label: '5', active: false },
                    { url: 'http://localhost:8000/du-an?page=2', label: '>', active: false },
                ],
                next_page_url: 'http://localhost:8000/du-an?page=2',
                path: 'http://localhost:8000/du-an',
                per_page: 10,
                prev_page_url: null,
                to: 10,
                total: 46,
            },

            categories: [
                {
                    title: 'Danh mục 5',
                    slug: 'danh-muc-5',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-5',
                },
                {
                    title: 'Danh mục 4',
                    slug: 'danh-muc-4',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-4',
                },
                {
                    title: 'Danh mục 3',
                    slug: 'danh-muc-3',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-3',
                },
                {
                    title: 'Danh mục 2',
                    slug: 'danh-muc-2',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-2',
                },
                {
                    title: 'Danh mục 1',
                    slug: 'danh-muc-1',
                    description: null,
                    url: 'http://localhost:3000/project/danh-muc-1',
                },
            ],

            currentPath: this.$route.path,
            category: null,
        }
    },

    created() {
        this.projects_data = this.projects.data
        this.categories.unshift({ title: 'Tất cả', url: this.$router.resolve({ name: 'project' }).fullPath })
    },
}
</script>
