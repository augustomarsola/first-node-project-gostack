import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppoitmentsRepository from '../repositories/AppoitmentsRepository';

const appointmentsRouter = Router();
const appoitmentsRepository = new AppoitmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appoitmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  const findAppointmentInSameDate = appoitmentsRepository.findByDate(
    parsedDate,
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appoitmentsRepository.create({
    provider,
    date: parsedDate,
  });

  return response.json(appointment);
});

export default appointmentsRouter;
