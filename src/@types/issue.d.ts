import { GithubUser } from './user';

export interface Issue {
  id: number;
  number: number;
  title: string;
  body: string;
  created_at: string;
  comments: number;
  user: GithubUser;
  html_url: string;
}
