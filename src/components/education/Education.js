const Education = ({educationInfo}) => {
    let educations;
    educations = educationInfo.map((education) => (
        <div className="col-sm-12 col-md-6 col-lg-4">
                <span className="portfolio-item d-block">
                    <div>
                        <span className="project-date">{education.degree}</span>
                        <br/>
                        <p className="project-title-settings mt-3">
                                {education.institution}
                        </p>
                    </div>
                </span>
        </div>
    ));

    return (
        <section id="education">
            <div className="col-md-12">
                <div className="col-md-12 mx-auto">
                    <h1>Education Background</h1>
                    <div className="row mx-auto">{educations}</div>
                </div>
            </div>
        </section>
    );

}

export default Education;