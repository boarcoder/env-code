/* eslint-disable camelcase */
import './App.css';
import './index.css'
import { parse } from 'yaml'
import data from '../../profiles/sr-software-engineer-python-gold-mingm.yml?raw';

// const file = fs.readFileSync('./profiles/frontend-engineer-mid.yml', 'utf8');
const CONSTANTS = parse(data);
const filterCompany = CONSTANTS?.professional_experience?.exclude_company_list ?? [];
console.log('Constants:', CONSTANTS)

function App() {
  return (
    <div className="customized-resume">
      <h1>{CONSTANTS.name}</h1>
      <table>
        <thead>
          <tr>
            <th>{CONSTANTS.email}</th>
            <th>{CONSTANTS.phone}</th>
            <th>
              <a href={`https://${CONSTANTS.github_short_uri}`} target="_blank" className="customLink" rel="noreferrer">
                {CONSTANTS.github_short_uri}
              </a>
            </th>
            <th>U.S. citizen</th>
          </tr>
        </thead>
      </table>
      <h2>{CONSTANTS.professional_experience.title}</h2>
      {CONSTANTS.professional_experience.job_list
        .filter((pred) => !filterCompany.includes(pred.company))
        .map((job) => {
          const {
            job_title, job_title_alt, company, start_date, end_date, bullets, skill_buttons,
          } = job;
          return (
            <>
              <h3>
                {job_title}
                {' '}
                -
                {' '}
                <span className='companyColor'>{company}</span>
              </h3>
              <h4>
                {start_date}
                {' '}
                -
                {' '}
                {end_date}
              </h4>
              <ul>
                {bullets.map((point) => <li>{point}</li>)}
              </ul>
              {skill_buttons.map((skill) => (
                <a href="#" className="button6">{skill}</a>
              ))}
              <hr />
            </>
          );
        })}
      {CONSTANTS.applications ? <h2>Applications</h2> : null}
      {CONSTANTS.applications ? 
      CONSTANTS.applications.map((app) => {
        const {
          bullets, skill_buttons, title, short_uri='',
        } = app;
        return (
          <>
            <h3>{title}</h3>
            {/* <a href={`https://${short_uri}`} target="_blank" className="customLink" rel="noreferrer">
              {short_uri}
            </a> */}
            <ul>
              {bullets.map((point) => <li>{point}</li>)}
            </ul>
            {skill_buttons.map((skill) => (
              <a href="#" className="button6">{skill}</a>
            ))}
            <hr />
          </>
        );
      })
    : null
    }
      {CONSTANTS.education.length > 0 ? (
        <>
          <h2>Education</h2>
          <ul>
            {CONSTANTS.education.map((school) => (
              <li>
                <h4>{school}</h4>
              </li>
            ))}
          </ul>
        </>
      ) : null}
      {CONSTANTS.interests.length > 0 ? (
        <>
          <h2>Interests</h2>
          <ul>
            {CONSTANTS.interests.map((interest) => (
              <p>
                {interest}
              </p>
            ))}
          </ul>
        </>
      ) : null}

    </div>
  );
}

export default App;
