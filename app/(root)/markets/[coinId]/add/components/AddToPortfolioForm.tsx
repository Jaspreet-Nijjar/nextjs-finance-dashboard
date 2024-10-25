'use client';

import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import usePortfolioStore from '@/store/portfolioStore';
import Image from 'next/image';
import { formatNumber } from '@/lib/utils';
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  amount: z.number().min(1, 'Amount must be at least 1'),
});

const AddToPortfolioForm = () => {
  const [showAddMessage, setShowAddMessage] = useState(false);

  const router = useRouter();
  const portfolio = usePortfolioStore((state) => state.portfolio);
  const addToAssets = usePortfolioStore((state) => state.addToAssets);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  const amount = form.watch('amount');

  if (!portfolio) {
    return <p>No coin selected for the portfolio.</p>;
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const assets = { ...portfolio, amount: values.amount };
    addToAssets(assets);
    setShowAddMessage(true);

    setTimeout(() => {
      router.push('/portfolio');
    }, 5000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex gap-2 items-center">
          <Image
            src={portfolio.image.large}
            alt={portfolio.id}
            width={50}
            height={50}
          />
          <p className="font-semibold">{portfolio.name}</p>
        </div>

        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Amount</FormLabel>
              <FormControl>
                <Input
                  placeholder="Number of coins"
                  {...field}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormDescription>
                Enter the number of coins you wish to purchase
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {amount > 0 && (
          <p className="text-[14px] text-gray-600">
            {amount} {portfolio.name} = $
            {formatNumber(portfolio.market_data.current_price.usd * amount)}
          </p>
        )}
        {showAddMessage && (
          <p className="text-[14px] text-green-600 max-w-sm">
            {`Thank you for your purchase of ${portfolio.name}. Your assets have been added to the
            portfolio. You will now be directed to the Portfolio page.`}
          </p>
        )}
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default AddToPortfolioForm;
