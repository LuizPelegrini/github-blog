import { NavLink, useSearchParams } from 'react-router-dom';
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

export function Post() {
  const [issue, setIssue] = useState<Issue | null>(null);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    async function fetchIssue() {
      const id = searchParams.get('id');
      const user = searchParams.get('user');
      const repo = searchParams.get('repo');

      const { data } = await api.get<Issue>(
        `/repos/${user}/${repo}/issues/${id}`,
      );

      setIssue(data);
    }

    fetchIssue();
  }, [searchParams]);

  if (!issue) {
    return <div>Loading...</div>;
  }

  function formatComments(commentsAmount: number) {
    if (commentsAmount === 1) return '1 comment';

    return `${commentsAmount} comments`;
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
              <span>1 day ago</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faComment} />
              <span>{formatComments(issue.comments)}</span>
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
