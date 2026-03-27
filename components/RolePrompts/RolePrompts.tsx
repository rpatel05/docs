import { Tabs } from 'nextra/components'

type RolePromptsProps = {
  roles: {
    label: string;
    prompts: string[];
  }[];
}

export default function RolePrompts({ roles }: RolePromptsProps) {
  const tabItems = roles.map(role => role.label);

  return (
    <Tabs items={tabItems}>
      {roles.map((role, index) => (
        <Tabs.Tab key={index}>
          <ul style={{ marginTop: '1rem' }}>
            {role.prompts.map((prompt, promptIndex) => (
              <li key={promptIndex} style={{ marginBottom: '0.5rem' }}>
                {prompt}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
