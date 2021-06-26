import { ReactNode } from 'react';

import { TemplateQuestion } from './styles';
import cx from 'classnames';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
  children?: ReactNode;
  isAnswered?: boolean;
  isHighlited?: boolean;
}

export function Question({
  content,
  author,
  isAnswered = false,
  isHighlited = false,
  children
}: QuestionProps) {
  return (
    <TemplateQuestion className={cx(
      'question',
      { answered: isAnswered },
      { highlighted: isHighlited && !isAnswered }
    )}>
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div>{children}</div>
      </footer>
    </TemplateQuestion>
  );
}
