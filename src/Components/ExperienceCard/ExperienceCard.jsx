import React from 'react';
import styles from './ExperienceCard.module.css';

export default function ExperienceCard() {
  const experienceData = [
    {
      company: 'ScaleupAlly',
      role: 'Jr. Software Engineer | Dec 2021 - Present',
      des: 'The passionate mind behind MERN Stack.',
      animationDur: '0.3s'
    },
    {
      company: 'Cyberflow',
      role: 'Web Developer | May - Dec 2021',
      des: 'Working with lastest technologies, UI, React, and React Native app development.',
      animationDur: '0.6s'
    },
    {
      company: 'Innovatia',
      role: 'Web Developer | Oct - Nov 2020',
      des: 'I was Working there as PHP , WordPress & Frontend Web Developer.',
      animationDur: '1.2s'
    }
  ];

  return (
    <>
      <div className="col-md-6 pr-lg-5 pr-md-5 pt-4">
        <div className="text-center mt-5">
          <h3>My Experience</h3>
        </div>
        <div className={`row my-4`}>
          {experienceData.map((item, index) => (
            <div
              className={`col-12 mt-3 wow bounceInLeft ${
                index === 0
                  ? styles.experience1
                  : index === 1
                  ? styles.experience2
                  : index === 2
                  ? styles.experience3
                  : null
              }`}
              data-wow-duration={item.animationDur}>
              <div className={`d-flex py-3 ${styles.experience_inner}`}>
                <div className="mx-4 align-self-center">
                  <i className="fas fa-code"></i>
                </div>
                <div className="pr-1 pr-sm-2">
                  <h5>{item?.company}</h5>
                  <p className="text-secondary mb-1">{item?.role}</p>
                  <p className="pr-lg-4">{item?.des}</p>
                </div>
              </div>
            </div>
          ))}

          {/* {renderExperience(
            'ScaleupAlly',
            'Jr. Software Engineer | Dec 2021 - Present',
            'The passionate mind behind MERN Stack.',
            '0.3s'
          )}
          {renderExperience(
            'Cyberflow',
            'Web Developer | May - Dec 2021',
            'Working with lastest technologies, UI, React, and React Native app development.',
            '0.6s'
          )}
          {renderExperience(
            'Innovatia',
            'Web Developer | Oct - Nov 2020',
            'I was Working there as PHP , WordPress & Frontend Web Developer.',
            '1.2s'
          )} */}
        </div>
      </div>
    </>
  );
}
