import { Notification, NotificationProps } from '@app/entities/notification';
import { Content } from '@app/entities/content';

type Overide = Partial<NotificationProps>;

export function makeNotification(overide: Overide = {}) {
  return new Notification({
    category: 'Pessoal',
    content: new Content('Nova notificação!'),
    recipientId: 'recipient-2',
    ...overide,
  });
}
