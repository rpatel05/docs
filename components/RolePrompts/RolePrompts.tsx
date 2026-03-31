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
          <ul style={{
            marginTop: '1.5rem',
            marginLeft: '1.5rem',
            paddingLeft: '1.5rem',
            listStyleType: 'disc',
            listStylePosition: 'outside',
            lineHeight: '1.8',
            display: 'block'
          } as React.CSSProperties}>
            {role.prompts.map((prompt, promptIndex) => (
              <li key={promptIndex} style={{
                marginBottom: '0.75rem',
                paddingLeft: '0.5rem',
                display: 'list-item'
              } as React.CSSProperties}>
                {prompt}
              </li>
            ))}
          </ul>
        </Tabs.Tab>
      ))}
    </Tabs>
  );
}
