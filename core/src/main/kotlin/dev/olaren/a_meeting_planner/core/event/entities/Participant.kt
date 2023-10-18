package dev.olaren.a_meeting_planner.core.event.entities

import java.time.Instant
import java.util.*

/**
 * A participant in the event.
 */
data class Participant(
    /**
     * The unique identifier of the participant.
     */
    val id: UUID,
    /**
     * The unique (per [Event]) name of the participant.
     */
    val name: String,
    /**
     * The password to verify the authenticity of the participant (optional).
     */
    val passwordHash: String?,
    /**
     * The time at witch the participant was created in UTC.
     */
    val createdAt: Instant,
    /**
     * The time at witch the participant was last updated in UTC.
     */
    val updatedAt: Instant,
)
