'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { AnimatedSection } from '@/components/ui/animated-section';

const formSchema = z.object({
  strength: z.string().min(10, {
    message: 'Please write a bit more, at least 10 characters.',
  }),
  experience: z.string().min(10, {
    message: 'Please write a bit more, at least 10 characters.',
  }),
  interest: z.string().min(10, {
    message: 'Please write a bit more, at least 10 characters.',
  }),
});

export function InteractiveQuestions() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      strength: '',
      experience: '',
      interest: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you might save this to localStorage
    console.log(values);
    toast({
      title: 'Reflection Saved!',
      description: "Great start! Your thoughts are for your eyes only.",
    });
    form.reset();
  }

  return (
    <section id="interactive-questions" className="py-16 md:py-24">
      <AnimatedSection className="container mx-auto px-4 md:px-6">
        <Card className="max-w-3xl mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="font-headline text-3xl">Start Your Journey of Self-Discovery</CardTitle>
            <CardDescription className="text-lg pt-2">These answers are just for you. Take your time.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="strength"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">What activities make you feel strong or energized?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., 'Organizing my bookshelf', 'Explaining a complex topic to a friend'..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">Think about a past achievement you're proud of. What skills did you use?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="It could be from school, a hobby, or work. e.g., 'I learned to play a song on guitar by breaking it down into small parts'..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg font-semibold">If you had a free afternoon, what would you learn about or do, just for fun?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Don't think about careers. What are you curious about? e.g., 'How black holes work', 'The history of my city'..."
                          {...field}
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="text-center">
                  <Button type="submit" size="lg">Save My Reflections</Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </AnimatedSection>
    </section>
  );
}
