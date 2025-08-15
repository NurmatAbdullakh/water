export const FormIds = {
    PersonalInfo: 'personal-info-form',
    ChangePassword: 'change-password-form',
} as const;

export type FormIdsType = typeof FormIds[keyof typeof FormIds];

export const FormType = {
    create: "create",
    edit: "edit"
} as const;

export type FormTypeType = typeof FormType[keyof typeof FormType];
