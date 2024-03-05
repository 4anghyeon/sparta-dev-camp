import {cn} from '@/lib/utils.ts';
import {HTMLAttributes} from 'react';

const CARD_BASE_CN = {
  root: 'rounded-lg border bg-card text-card-foreground shadow-sm',
  header: 'flex flex-col space-y-1.5 p-6',
  title: 'text-2xl font-semibold leading-none tracking-tight',
  description: 'text-sm text-muted-foreground',
  content: 'p-6 pt-0',
  footer: 'flex items-center p-6 pt-0',
};

const Card = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(CARD_BASE_CN.root, className)} {...props} />;
};
Card.displayName = 'Card';

const CardHeader = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(CARD_BASE_CN.header, className)} {...props} />;
};
CardHeader.displayName = 'CardHeader';

const CardTitle = ({className, children, ...props}: HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h3 className={cn(CARD_BASE_CN.title, className)} {...props}>
      {children}
    </h3>
  );
};
CardTitle.displayName = 'CardTitle';

const CardDescription = ({className, ...props}: HTMLAttributes<HTMLParagraphElement>) => {
  return <p className={cn(CARD_BASE_CN.description, className)} {...props} />;
};
CardDescription.displayName = 'CardDescription';

const CardContent = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(CARD_BASE_CN.content, className)} {...props} />;
};
CardContent.displayName = 'CardDescription';

const CardFooter = ({className, ...props}: HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(CARD_BASE_CN.footer, className)} {...props} />;
};
CardFooter.displayName = 'CardDescription';

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent};
