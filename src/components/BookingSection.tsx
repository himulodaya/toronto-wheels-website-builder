
import React, { useState } from 'react';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CalendarClock, CalendarDays, Clock } from 'lucide-react';
import { toast } from "@/hooks/use-toast";

const bookingFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  courseType: z.string({
    required_error: "Please select a course type.",
  }),
  time: z.string({
    required_error: "Please select a time slot.",
  }),
});

const timeSlots = [
  "9:00 AM", 
  "10:00 AM", 
  "11:00 AM", 
  "12:00 PM", 
  "1:00 PM", 
  "2:00 PM", 
  "3:00 PM", 
  "4:00 PM", 
  "5:00 PM"
];

const BookingSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [availableTimeSlots, setAvailableTimeSlots] = useState<string[]>(timeSlots);
  
  const form = useForm<z.infer<typeof bookingFormSchema>>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      courseType: "",
      time: "",
    },
  });

  const onSubmit = (data: z.infer<typeof bookingFormSchema>) => {
    toast({
      title: "Booking Requested!",
      description: `Your booking for ${date ? format(date, 'MMMM dd, yyyy') : ''} at ${data.time} has been requested. We'll contact you shortly.`,
    });
    form.reset();
    setDate(new Date());
  };

  // This would typically come from an API
  const bookedDates = [
    new Date(2025, 4, 10),
    new Date(2025, 4, 12),
    new Date(2025, 4, 15),
  ];
  
  // This would simulate getting available time slots from an API
  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    
    if (selectedDate) {
      // Simulate different time slot availability based on the day of the week
      const dayOfWeek = selectedDate.getDay();
      
      if (dayOfWeek === 0) { // Sunday
        setAvailableTimeSlots(timeSlots.slice(2, 6)); // Limited hours
      } else if (dayOfWeek === 6) { // Saturday
        setAvailableTimeSlots(timeSlots.slice(0, 4)); // Morning only
      } else {
        setAvailableTimeSlots(timeSlots); // Full availability
      }
      
      form.setValue("time", "");
    }
  };

  return (
    <section id="booking" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Lesson</h2>
          <p className="text-gray-600">
            Choose a date and time that works for you and our team will be ready
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar Side */}
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-driving-orange" /> 
                <span>Select a Date</span>
              </CardTitle>
              <CardDescription>
                Choose your preferred day for the driving lesson
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center pb-6">
              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateSelect}
                disabled={(date) => {
                  // Disable past dates and fully booked dates
                  const isPastDate = date < new Date(new Date().setHours(0, 0, 0, 0));
                  const isBooked = bookedDates.some(
                    (bookedDate) => 
                      format(bookedDate, 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
                  );
                  return isPastDate || isBooked;
                }}
                className="border rounded-md"
              />
            </CardContent>
          </Card>
          
          {/* Booking Form Side */}
          <Card className="bg-white shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarClock className="h-5 w-5 text-driving-orange" /> 
                <span>Complete Your Booking</span>
              </CardTitle>
              <CardDescription>
                Fill in your details to book a driving lesson
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email Address</FormLabel>
                          <FormControl>
                            <Input placeholder="you@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="(416) 555-1234" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="courseType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Course Type</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="car">Car Driving</SelectItem>
                            <SelectItem value="highway">Highway Code</SelectItem>
                            <SelectItem value="traffic">Traffic Science</SelectItem>
                            <SelectItem value="emergency">Emergency Aid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="time"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-1">
                          <Clock className="h-4 w-4" /> Available Times
                        </FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          disabled={!date}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder={date ? "Select a time" : "Select a date first"} />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {availableTimeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="pt-2">
                    <Button 
                      type="submit" 
                      className="w-full bg-driving-orange hover:bg-driving-orange/90"
                    >
                      Book Your Lesson
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex justify-center text-sm text-gray-500">
              <p>
                {date 
                  ? `Selected date: ${format(date, 'MMMM dd, yyyy')}` 
                  : "Please select a date to proceed with booking"}
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
