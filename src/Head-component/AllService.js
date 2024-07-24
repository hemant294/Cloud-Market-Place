const AllService = ({ setAllServicesdata }) => {
    // const allServiceClickHandler = (e) => {
    //     console.log(setAllServicesdata(e))
    //     return setAllServicesdata(e)
    // }
    // const allser = "allservice";
    const handleSubmit = () => {
        // console.log("all", setAllServicesdata(allser));
        return setAllServicesdata("allsevice");
    }

    return (
        <>
            {/* <form onSubmit={handleSubmit}> */}
                <button  onClick={handleSubmit}>AllService</button>
            {/* </form> */}
        </>
    )
}
export default AllService;