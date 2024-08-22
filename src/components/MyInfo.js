function MyInfo(props) {
    return (
        <div>
            <p className={'hi-there'+props.device}>HI THERE I'M</p>
            <p className={'name'+props.device}>JOSEPH SEARLE</p>
            <p className={'job-title'+props.device}>SOFTWARE DEVELOPER</p>
            <p className={'info'+props.device}>I'M A FULL STACK DEVELOPER CURRENTLY WORKING @IBM</p>
            <p className={'info'+props.device}>BUILDING A LARGE SCALE MICROSERVICE'S APPLICATION IN AWS CLOUD</p>
        </div>
    );
}

export default MyInfo;