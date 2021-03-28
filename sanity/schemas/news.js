export default {
    name: 'news',
    title: 'News',
    type: 'document',
    fields: [
        {
            name: 'judul',
            title: 'Judul',
            type: 'string',
            description: `Judul Berita`
        },
        {
            name: 'konten',
            title: 'Konten',
            type: 'text',
            description: `Konten / Isi Berita`
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Url Berita',
            options: {
                source: 'name',
                maxLength: 100,
            }
        },
        {
            name: 'image',
            title: 'Gambar',
            type: 'image',
            options: {
                hotspot: true
            }
        }
    ]
};