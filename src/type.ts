export const FormIds = {
    PersonalInfo: 'personal-info-form',
    ChangePassword: 'change-password-form',
} as const;

export type FormIdsType = typeof FormIds[keyof typeof FormIds];
