package com.klef.event.service;

import com.klef.event.model.Event;
import java.util.List;

public interface EventService {
    String addEvent(Event event);
    String updateEvent(Long id, Event updatedEvent);
    String deleteEvent(Long id);
    List<Event> getAllEvents();
}
