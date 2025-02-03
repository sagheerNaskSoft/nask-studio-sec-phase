import React from 'react'
function Contactus() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);

    const onSubmit = (data) => {
        setLoading(true);
        setTimeout(() => {
            alert("Message sent successfully!");
            setLoading(false);
        }, 2000);
    };

    return (
        <>
           <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-lg p-6 shadow-lg rounded-2xl bg-white">
        <CardContent>
          <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-700">Name</label>
              <Input {...register("name", { required: "Name is required" })} placeholder="Your Name" />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Email</label>
              <Input type="email" {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email address" } })} placeholder="Your Email" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-gray-700">Message</label>
              <Textarea {...register("message", { required: "Message is required" })} placeholder="Your Message" />
              {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
        </>
    )
}

export default Contactus
