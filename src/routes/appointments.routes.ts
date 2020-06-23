import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppoitmentsRepository from '../repositories/AppoitmentsRepository';
import CreateAppointmentService from '../services/CreateAppointmentService';

const appointmentsRouter = Router();
const appoitmentsRepository = new AppoitmentsRepository();

appointmentsRouter.get('/', (request, response) => {
  const appointments = appoitmentsRepository.all();

  return response.json(appointments);
});

appointmentsRouter.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parsedDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appoitmentsRepository,
    );

    const appointment = createAppointment.execute({
      date: parsedDate,
      provider,
    });

    return response.json(appointment);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default appointmentsRouter;
