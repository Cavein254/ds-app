'use client';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const CreateTribe = () => {
  const formSchema = z.object({
    name: z.string().min(5, {
      message: 'Tribe name is required',
    }),
    imageUrl: z.string().min(5, {
      message: 'An image Url is required',
    }),
    description: z
      .string()
      .min(5, {
        message: 'A description of the tribe is required',
      })
      .max(100, { message: 'A maximum of 100 characters allowed' }),
  });
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      imageUrl: '',
      description: '',
    },
  });

  const onSubmit = () => {};
  return (
    <form
      className="z-20 rounded-md p-2 shadow-md dark:bg-[#0c0a09]"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <div className="p-2 flex flex-col">
        <h4 className="text-xl font-bold capitalize">Create Your own Tribe</h4>
        <input
          name="imageUrl"
          placeholder="Image Url"
          className="capitalize px-4 py-2 dark:bg-[#0c0a09] rounded-md my-2 border-0  focus-visible:ring-0 focus-visible:ring-offset-0"
          {...form}
        />
        <input
          name="name"
          placeholder="Name of your tribe"
          className="capitalize px-4 py-2 dark:bg-[#0c0a09] rounded-md my-2 border-0  focus-visible:ring-0 focus-visible:ring-offset-0"
          {...form}
        />
        <textarea
          name="description"
          placeholder="Enter a Brief Description of your Tribe"
          rows={5}
          className="p-1 rounded-md active:border-0 my-2 dark:bg-[#0c0a09]"
          {...form}
        />
        <Button variant="primary">Create</Button>
      </div>
    </form>
  );
};

export default CreateTribe;
