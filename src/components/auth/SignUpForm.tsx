import {Form, FormControl, FormField, FormItem, FormLabel, FormMessage} from '../ui/form';
import {Input} from '../ui/input';
import {Button} from '@/components/ui/button.tsx';
import {ArrowRight} from 'lucide-react';
import {useState} from 'react';
import {useToast} from '@/components/ui/use-toast.ts';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select.tsx';
import {cn} from '@/lib/utils.ts';
import {z} from 'zod';
import {registerSchema} from '@/validators/auth.ts';
import {motion} from 'framer-motion';

type RegisterInput = z.infer<typeof registerSchema>;

const SignUpForm = () => {
  const [step, setStep] = useState<number>(0);

  const {toast} = useToast();
  const form = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      phone: '',
      email: '',
      role: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: RegisterInput) => {
    const {password, confirmPassword} = data;
    if (password !== confirmPassword) {
      toast({
        title: '비밀번호가 일치하지 않습니다.',
        variant: 'destructive',
        duration: 1000,
      });
      return;
    }
    alert(JSON.stringify(data, null, 4));
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="relative space-y-3 overflow-x-hidden">
        <motion.div
          className={cn('space-y-3')}
          animate={{translateX: `${step * -100}%`}}
          transition={{ease: 'easeInOut'}}
        >
          <FormField
            control={form.control}
            name="username"
            render={({field}) => (
              <FormItem>
                <FormLabel>이름</FormLabel>
                <FormControl>
                  <Input placeholder="홍길동" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({field}) => (
              <FormItem>
                <FormLabel>이메일</FormLabel>
                <FormControl>
                  <Input placeholder="hello@sparta-devcamp.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({field}) => (
              <FormItem>
                <FormLabel>연락처</FormLabel>
                <FormControl>
                  <Input placeholder="01000000000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({field}) => (
              <FormItem>
                <FormLabel>역할</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="역할을 선택해주세요" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="admin">관리자</SelectItem>
                    <SelectItem value="user">일반사용자</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>
        <motion.div
          className={cn('space-y-3 absolute top-0 left-0 right-0')}
          animate={{translateX: `${(1 - step) * 100}%`}}
          initial={{translateX: `${(1 - step) * 100}%`}}
          transition={{ease: 'easeInOut'}}
        >
          <FormField
            control={form.control}
            name="password"
            render={({field}) => (
              <FormItem>
                <FormLabel>비밀번호</FormLabel>
                <FormControl>
                  <Input type={'password'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({field}) => (
              <FormItem>
                <FormLabel>비밀번호 확인</FormLabel>
                <FormControl>
                  <Input type={'password'} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </motion.div>

        <div className="flex gap-2">
          <Button className={cn({hidden: step === 0})} type="submit">
            계정 등록하기
          </Button>
          <Button
            type="button"
            className={cn({hidden: step === 1})}
            onClick={() => {
              // form.trigger(['phone', 'email', 'username', 'role']);
              // const phoneState = form.getFieldState('phone');
              // const emailState = form.getFieldState('email');
              // const usernameState = form.getFieldState('username');
              // const roleState = form.getFieldState('role');
              //
              // if (!phoneState.isDirty || phoneState.invalid) return;
              // if (!emailState.isDirty || emailState.invalid) return;
              // if (!usernameState.isDirty || usernameState.invalid) return;
              // if (!roleState.isDirty || roleState.invalid) return;

              setStep(1);
            }}
          >
            다음 단계로
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className={cn({hidden: step === 0})}
            onClick={() => {
              setStep(0);
            }}
          >
            이전 단계로
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SignUpForm;
