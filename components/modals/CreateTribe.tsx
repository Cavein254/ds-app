'use client';
import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const CreateTribe = () => {
  //TODO :: Remove usestate and use zod instead
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [description, setDescription] = useState('');
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log({ values });
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name,
      imageUrl,
      description,
      invite: 'hghgh',
      profileId: 'clr0q48ic00005ej2qnd61sey',
    };
    try {
      await axios.post('/api/me/create-tribe', formData, {
        headers: {
          Accept: 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      className="z-20 rounded-md p-2 shadow-md dark:bg-[#0c0a09]"
      onSubmit={onHandleSubmit}
    >
      <div className="p-2 flex flex-col">
        <h4 className="text-xl font-bold capitalize">Create Your own Tribe</h4>
        <input
          name="imageUrl"
          placeholder="Image Url"
          className="capitalize px-4 py-2 dark:bg-[#0c0a09] rounded-md my-2 border-0  focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          name="name"
          placeholder="Name of your tribe"
          className="capitalize px-4 py-2 dark:bg-[#0c0a09] rounded-md my-2 border-0  focus-visible:ring-0 focus-visible:ring-offset-0"
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Enter a Brief Description of your Tribe"
          rows={5}
          className="p-1 rounded-md active:border-0 my-2 dark:bg-[#0c0a09]"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateTribe;
