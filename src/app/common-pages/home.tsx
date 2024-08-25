import styles from './home.module.css'
const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <h1>Give Yourself New Opportunity Each Day</h1>
            </div>
            <div className={styles.academic}>
                <h3>Your Path To Academic Excellence</h3>
                <div className={styles.main_container}>
                    <div className={styles.left_side}>
                        <div className={styles.text_container} >
                            <ul>
                                <li>
                                    At Liggid Classes, we recognize every student’s uniqueness and distinct learning needs.                                </li>
                                <li>
                                    Our mission is to connect students with experienced and caring tutors.
                                </li>
                                <li>We aim to foster a love for learning and ignite enthusiasm in students.
                                </li>
                                <li>
                                    Our focus is on creating an environment where passion for education thrives.</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.right_side}>
                        <div className={styles.clip_container}>
                            <img src="/docs/images/teacher2.png" alt="Overlay Image" className={styles.image} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.why_us}>
                <div className={styles.empower_learning}>
                    <h2>Elevate Learning</h2>
                    <p>Empower Your Learning Journey with Expert Tuition in Delhi! .
                        We provide Everything You Need to Learn Anything with Personalized Tutoring for School-Level Subjects.
                    </p>
                    <div className={styles.empower_learning_buttons}>
                        <button> Start Learnings</button>
                        <button>Discover Cources</button>
                    </div>

                </div>
                <div className={styles.empower_learning}>
                    <h2>We Provide</h2>
                    <p>1. One-on-One Tutoring</p>
                    <p>2. Group Tutoring</p>
                    <p>3. Test Preparation</p>
                    <p>4. Subject-Specific Tutoring</p>
                    <p>5. Homework Help</p>
                </div>
            </div>

            <div>
                <div className={styles.help}>
                    {/* <div className={styles.left_help_section}>
                    <div>
                    <img src="/docs/images/subjects.jpg" alt="" />                     
                    </div>
                </div> */}
                    <div className={styles.right_help_section}>
                        <div>
                            <div className={styles.right_container_top}>
                                <h1>Subjects We Offer </h1>
                            </div>
                            <div className={styles.right_container_bottom}>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/computer-svgrepo-com.svg" alt="" />
                                        <h3> Computer </h3>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/letter-hindi-a-svgrepo-com.svg" alt="" />
                                        <h3>Hindi</h3>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/barretr-Book.svg" alt="" />
                                        <h3>English</h3>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/mapping-and-geography-svgrepo-com.svg" alt="" />
                                        <h3>
                                            Geography
                                        </h3>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/math-class-svgrepo-com.svg" alt="" />
                                        <h3>Maths</h3>
                                    </div>
                                </div>
                                <div className={styles.item}>
                                    <div className={styles.science}>
                                        <img src="/docs/images/science-chemistry-svgrepo-com.svg" alt="" />
                                        <h3>Science</h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.why_us_comtainer}>
                <div className={styles.why_us_heading}>
                    <h2>Why Choose Us</h2>
                </div>
                <div className={styles.why_us_container}>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                            <h5>Expert Tutors</h5>
                            <p>Qualified Professionals</p>
                            <p>Proven Track Record</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>Our team of highly qualified and experienced tutors are experts in their fields. They bring both academic knowledge and practical experience to help students excel in their studies.</p>
                        </div>

                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                        <h5>Personalized Learning</h5>
                            <p>Custom Study Plans</p>
                            <p>One-on-One Attention</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>We believe that each student has unique needs and learning styles. Our tutoring approach is tailored to fit the individual requirements of every student.</p>
                        </div>

                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                            <h5>Flexible Scheduling</h5>
                            <p>Various Time Slots</p>
                            <p>Online and In-Person Options</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>Balancing school, activities, and family can be challenging. Our flexible scheduling options make it easy for students to fit tutoring sessions into their busy lives.</p>
                        </div>

                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                            <h5>Proven Results</h5>
                            <p>Improved Grades</p>
                            <p>Positive Feedback</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>We are committed to helping students achieve their academic goals. Our approach has led to measurable improvements and success stories.</p>
                        </div>

                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                            <h5>Comprehensive Resources</h5>
                            <p>Study Materials</p>
                            <p>Practice Tests</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>Our tutoring services are backed by a wealth of resources to support student learning both inside and outside of sessions.</p>
                        </div>
                    </div>
                    <div className={styles.content_container}>
                        <div className={styles.content_heading}>
                            <h5>Supportive Environment</h5>
                            <p>Encouraging Atmosphere</p>
                            <p>Open Communication</p>
                        </div>
                        <div className={styles.content_description}>
                            <p>We create a positive and encouraging learning environment where students feel comfortable and motivated to succeed.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;