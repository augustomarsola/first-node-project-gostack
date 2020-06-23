import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppoitmentsRepository from '../repositories/AppoitmentsRepository';

interface Request {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appoitmentsRepository: AppoitmentsRepository;

  constructor(appoitmentsRepository: AppoitmentsRepository) {
    this.appoitmentsRepository = appoitmentsRepository;
  }

  public execute({ date, provider }: Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = this.appoitmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = this.appoitmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
