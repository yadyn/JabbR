using System.Configuration;

namespace JabbR.Services
{
    [System.ComponentModel.Composition.InheritedExport]
    public interface IJabbrConfiguration
    {
        bool RequireHttps { get; }
        bool ProxyImages { get; }
        bool MigrateDatabase { get; }

        string DeploymentSha { get; }
        string DeploymentBranch { get; }
        string DeploymentTime { get; }

        string ServiceBusConnectionString { get; }
        string ServiceBusTopicPrefix { get; }

        ConnectionStringSettings SqlConnectionString { get; }
        bool ScaleOutSqlServer { get; }

        string DefaultAdminUserName { get; }
        string DefaultAdminPassword { get; }
    }
}