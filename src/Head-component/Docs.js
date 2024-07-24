import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import TopCSP from "../components/CloudPlatforms";
import "./Docs.css";
const Docs = () => {
    return <>
        <Container>
            <div className="docs d-flex">
                <div className="col-3 mt-3">
                    <TopCSP />
                </div>
                <div className="col-9 mt-3">
                    <div className="card ">
                        <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202307/amazon_july_0-sixteen_nine.jpg?VersionId=qJYvhIxbkjCWEQlD3K9y_a6GkkR6w4_S" className="images"/>
                                                <hr />
                        <div className="card-body">
                            <NavLink target="_blank" to="https://docs.aws.amazon.com/">AWS</NavLink>
                            {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                        </div>
                    </div>
                    <div>

                    </div>
                    <div>
                        <NavLink target="_blank" to="https://learn.microsoft.com/en-us/azure/?product=popular">Asure</NavLink>
                    </div>
                    <div>
                        <NavLink target="_blank" to="https://cloud.google.com/free/?utm_source=google&utm_medium=cpc&utm_campaign=japac-IN-all-en-dr-BKWS-all-cloud-trial-EXA-dr-1605216&utm_content=text-ad-none-none-DEV_c-CRE_634266354655-ADGP_Hybrid%20%7C%20BKWS%20-%20EXA%20%7C%20Txt%20~%20GCP_General_google%20cloud%20platform_misc-KWID_43700074200361120-aud-1644542956228%3Akwd-316837062214&userloc_9301864-network_g&utm_term=KW_google%20cloud%20platform%20documentation&gclid=CjwKCAjwg4SpBhAKEiwAdyLwvD3ndSOcACjit0DMd-L_Od13CT-rnAAa1ARsqeENcFByKjzVWh8FxRoCOgsQAvD_BwE&gclsrc=aw.ds">GCP</NavLink>
                    </div>
                    <div>
                        <NavLink target="_blank" to="https://cloud.ibm.com/docs">IBM Cloud</NavLink>
                    </div>
                    <div>
                        <NavLink target="_blank" to="https://docs.netlify.com/get-started/">Netlify</NavLink>
                    </div>
                    <div>
                        <NavLink target="_blank" to="https://devcenter.heroku.com/categories/reference">Heroku</NavLink>
                    </div>
                    <div>
                        <NavLink target="_blank" to="https://www.alibabacloud.com/help/en">Alibaba</NavLink>
                    </div>
                </div>
            </div>
        </Container>
    </>
}
export default Docs;