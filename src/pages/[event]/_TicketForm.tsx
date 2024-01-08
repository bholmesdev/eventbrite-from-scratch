import { createForm } from "simple:form";
import { Form, Input } from "../../components/Form";
import { z } from "zod";

export const ticketForm = createForm({
  email: z.string().email().min(10),
  quantity: z.number(),
});

export default function TicketForm() {
  return (
    <Form validator={ticketForm.validator}>
      <label htmlFor="email">Email</label>
      <Input id="email" {...ticketForm.inputProps.email} />
      <label htmlFor="quantity">Quantity</label>
      <Input id="quantity" {...ticketForm.inputProps.quantity} />

      <button type="submit">Buy tickets</button>
    </Form>
  );
}
