import React from 'react';
import { DEFAULT_NOTIFICATIONS_AUTO_CLOSE } from '@/project-settings/global';
import { Text } from '@mantine/core';
import { NotificationData, notifications } from '@mantine/notifications';
import { TbCircleCheckFilled, TbCircleXFilled } from 'react-icons/tb';

class NotificationsManagerClass {
  showSuccess = (
    title: NotificationData['title'],
    message?: NotificationData['message'],
    options?: Omit<NotificationData, 'title' | 'message'>
  ) => {
    notifications.show({
      icon: <TbCircleCheckFilled />,
      title,
      message:
        typeof message === 'string' ? (
          <Text inherit className="render-as-is-wrap-text">
            {message}
          </Text>
        ) : (
          message
        ),
      color: 'green',
      autoClose: DEFAULT_NOTIFICATIONS_AUTO_CLOSE,
      ...options,
    });
  };

  showError = (
    title: NotificationData['title'],
    message?: NotificationData['message'],
    options?: Omit<NotificationData, 'title' | 'message'>
  ) => {
    notifications.show({
      icon: <TbCircleXFilled />,
      title,
      message:
        typeof message === 'string' ? (
          <Text inherit className="render-as-is-wrap-text">
            {message}
          </Text>
        ) : (
          message
        ),
      color: 'red',
      autoClose: DEFAULT_NOTIFICATIONS_AUTO_CLOSE,
      ...options,
    });
  };

  clean() {
    notifications.clean();
  }
}

const NotificationsManager = new NotificationsManagerClass();

export default NotificationsManager;
