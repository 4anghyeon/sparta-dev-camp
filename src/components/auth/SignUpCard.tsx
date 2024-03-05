import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card.tsx';
import {cn} from '@/lib/utils.ts';
import SignUpForm from '@/components/auth/SignUpForm.tsx';

const SignUpCard = () => {
  return (
    <Card className={cn('w-[380px]')}>
      <CardHeader>
        <CardTitle>계정을 생성합니다</CardTitle>
        <CardDescription>필수 정보를 입력헤볼게요.</CardDescription>
      </CardHeader>
      <CardContent>
        <SignUpForm />
      </CardContent>
      <CardFooter>데브캠프</CardFooter>
    </Card>
  );
};

export default SignUpCard;
