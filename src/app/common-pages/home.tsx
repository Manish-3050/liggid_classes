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
                    <h2>Empower Your Learning</h2>
                    <p>Empower Your Learning Journey with Expert Tuition in Delhi! .
                    We provide Everything You Need to Learn Anything with Personalized Tutoring for School-Level Subjects.
                    </p>
                    <div className={styles.empower_learning_buttons}>
                        <button>Start Learnings</button>
                        <button>Discover Cources</button>
                    </div>

                </div>
                <div className={styles.why_us_comtainer}>
                    <p>guigouigouigouiguioguigui</p>
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
        </div>
    )
}

export default Home;