import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import RightNav from "../components/layout-component/RightNav";

const NewsDetails = () => {
    const data = useLoaderData()
    const newsData =data.data[0] 
    const {details,title,total_view,image_url,category_id} = newsData;
    // console.log(newsData)
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
                <section className="col-span-9">
                    <h2 className=" font-semibold mb-3">{title}</h2>

                    <div className="card bg-base-100  shadow-sm">
                        <figure className="px-10 pt-10">
                            <img
                                src={image_url}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        <div className="card-body ">
                            <h2 className="card-title">Card Title</h2>
                            <p>{details}</p>
                            <div className="card-actions">
                                <Link to={`/category/${category_id}`} className="btn btn-primary">Back to category</Link >
                            </div>
                        </div>
                    </div>

                </section>
                <aside className="col-span-3">
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;