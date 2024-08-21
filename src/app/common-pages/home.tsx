import styles from './home.module.css'
const Home = () => {
    return (
        <div>
            <div className={styles.home}>
                <h1>Give Yourself New Opportunity Each Day</h1>
            </div>
            <div className={styles.main_container}>
                <div className={styles.left_side}>
                    <h3>Your Path To Academic Excellence</h3>
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


            {/* <div className={styles.helping_child}>
                <div className={styles.helping_child_left_side}>
                    <div className={styles.helping_child_image}>
                        <img src="/docs/images/student4.png" alt="Overlay Image" className={styles.image} />
                    </div>
                </div>

                <div className={styles.helping_child_right_side}>
                    <div className={styles.helping_text_container} >
                       <div className={styles.helping_container_text}>
                        <h2>Helping each child find and follow their best learning path</h2>
                       </div>
                    </div>
                </div>


            </div> */}



<div>
            <div className={styles.help}>
                <div className={styles.left_help_section}>
                    <div>
                    <img src="/docs/images/student_teacher.jpg" alt="" />                     
                    </div>
                </div>
                <div className={styles.right_help_section}>
                    <div>
                        <div className={styles.right_container_top}>
                            <h1> Web Development </h1>
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
                                    <h3>Social</h3>
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