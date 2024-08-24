/*
import razorpayInstance from '@/lib/razorpay';

export async function POST(req) {
    const { amount, currency, receipt, notes } = await req.json();

    try {
        const options = {
            amount: amount * 100, // Amount in paise (e.g., Rs. 500 = 50000 paise)
            currency,
            receipt,
            payment_capture: 1, // Auto capture payment
            notes,
        };

        const order = await razorpayInstance.orders.create(options);

        return new Response(JSON.stringify(order), { status: 200 });
    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ message: 'Internal error' }), { status: 500 });
    }
} 
*/
