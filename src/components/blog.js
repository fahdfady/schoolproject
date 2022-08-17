const Blog = ({ blogs }) => {

    return (
        <section className="blogs">
            <div className="section-title">
                <h2>
                    <span> why </span> we created this website
                </h2>
                <p className="section-subtitle">
                    articles, blogs and videos about reasons why we created this website
                </p>
            </div>

            <div className="blogs-container container">
                { blogs.map((blog) => (
                    <div className="blog" key={ blog.id }>
                        <div className="card">
                            <div className="image-container">
                                <img src={ blog.image } alt={ blog.title } loading="lazy" />
                            </div>

                            <div className="content">
                                <h2 className="blog-title">
                                    { blog.title }
                                </h2>

                                <p className="article">
                                    { blog.content }
                                </p>

                            </div>
                        </div>
                    </div>
                )) }
            </div>
        </section>
    )
}

export default Blog;