import { NavLink, useParams } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  faCalendarDay,
  faComment,
  faChevronLeft,
  faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Container, Links, Details, Markdown } from './styles';
import { useEffect, useState } from 'react';
import { api } from '../../lib/axios';
import { Issue } from '../../@types/issue';
import ReactMarkdown from 'react-markdown';

const { VITE_USER_NAME: USER_NAME, VITE_REPO_NAME: REPO_NAME } = import.meta
  .env;

export function Post() {
  const [issue, setIssue] = useState<Issue | null>(null);
  const { id } = useParams();

  // sync by fetching issue by id
  useEffect(() => {
    let ignore = false;

    async function fetchIssue() {
      const { data } = await api.get<Issue>(
        `/repos/${USER_NAME}/${REPO_NAME}/issues/${id}`,
      );

      // to prevent late responses overriding each other
      if (!ignore) {
        setIssue(data);
      }
    }

    fetchIssue();

    return () => {
      ignore = true;
    };
  }, [id]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Container>
        <Links>
          <NavLink to="/">
            <FontAwesomeIcon icon={faChevronLeft} />
            Back
          </NavLink>
          <a href={issue.html_url} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            Check on GitHub
          </a>
        </Links>

        <Details>
          <h2>{issue.title}</h2>
          <div>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <span>{issue.user.login}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>
                {formatDistanceToNow(new Date(issue.created_at), {
                  addSuffix: true,
                })}
              </span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{`${issue.comments} ${
                issue.comments === 1 ? 'comment' : 'comments'
              }`}</span>
            </div>
          </div>
        </Details>
      </Container>

      <Markdown>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
      </Markdown>
    </>
  );
}
