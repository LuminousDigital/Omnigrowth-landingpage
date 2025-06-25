export const queryKeys = {
    all: ['waitlist'] as const,
    create: () => [...queryKeys.all, 'create'] as const,
};